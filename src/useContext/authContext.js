import React, { createContext, useContext, useState, useEffect, useReducer } from "react";

// firebase
import { auth } from '../firebase'
import {db, storage,fireSt} from '../firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

// reducer
import Reducer from "./reducer";

const postCollectionRef = collection(db,"HIROS")
const regLinkPost = collection(db,"Links")

const usingRefHIROS = fireSt.collection('HIROS')
const usingRefLinks = fireSt.collection('Links')



const AuthContext = createContext();

export const ContextPage = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) =>{

    const [uploadProgress, setUploadProgress] = useState(null)
    
    const myState = {
        createState : {
            title:'',
            blogCategory:'',
            bloggerRef:'',
            routeRef:'',
            blogContent:''
        }
    }

    const [state, dispatch] = useReducer(Reducer,myState);
    

    const [currentUser, setCurrentUser] = useState('')

    // signup_user
    const signup = (email,password) =>{
        auth.createUserWithEmailAndPassword(email,password)
    }

    // Login user
    const login = (email,password) =>{
        return auth.signInWithEmailAndPassword(email,password)
    }

    // forgot password
    const forgotPassword = email =>{
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged(User =>{
            setCurrentUser(User)
        })
        return unsubscribed
    }, [])



    // get post by title

    
     


    // get postTitles
    const [myData, setData] = useState([])

    useEffect(()=>{

        usingRefHIROS.onSnapshot(querySnapshot =>{
            const items = []
            querySnapshot.forEach(doc =>{
                items.push(doc.data().postTitle)
            })

            setData(items)
        })
        
    },[])


    // Delete post
    const DeletePost = postTitle =>{
        
            usingRefHIROS.where('postTitle','==',postTitle).onSnapshot(querySnapshot =>{
                const items = []
                querySnapshot.forEach(doc =>{
                    doc.ref.delete()
                })

                setData(items)
            })
    
    }



    const updatePost = (postTitle,newContent,changedImage,newImage,newCategory,bloggerRef) =>{
        usingRefHIROS.where('postTitle','==',postTitle).onSnapshot(querySnapshot =>{
            querySnapshot.forEach(doc =>{
                if(changedImage === true){

                    let picName = postTitle+'.png'
                    const uploadTask = storage.ref(`postImages/${picName}`).put(newImage);
                    uploadTask.on(
                        'state_changed',
                        snapshot => {
                            const progress = Math.round(
                                (snapshot.bytesTransferred/ snapshot.totalBytes)*100
                            )
                            setUploadProgress(progress)
                        },
                        error => {
                            console.log(error)
                        },
                        async ()=>{
                            await storage.ref('postImages').child(picName).getDownloadURL().then(url => {        
                                addDoc(postCollectionRef, {
                                    blogContent:newContent,
                                    bloggerRef:bloggerRef,
                                    blogCategoryRef:newCategory,
                                    imageUrl:url
                                })
                            })

                        
                        }
                    )
                    doc.ref.update({
                        
                        

                    })
                }else{
                    doc.ref.update({
                        blogContent:newContent,
                        bloggerRef:bloggerRef,
                        blogCategoryRef:newCategory,
                    })
                }
            })
        })
    }




    // create Post

    const createPostHandler = async (
        blogContent,bloggerRef,routeRef,blogCategoryRef,topTitle,publishedDateRef,postImage
    ) =>{

        let picName = topTitle+'.png'

        const uploadTask = storage.ref(`postImages/${picName}`).put(postImage);
        
        uploadTask.on(
            'state_changed',
            snapshot => {},
            error => {
                console.log(error)
            },
            async ()=>{
                await storage.ref('postImages').child(picName).getDownloadURL().then(url => {        
                

                addDoc(postCollectionRef, {
                    blogContent:blogContent,
                    bloggerRef:bloggerRef,
                    routeRef:routeRef,
                    blogCategoryRef:blogCategoryRef,
                    postTitle:topTitle,
                    publishedDateRef:publishedDateRef,
                    imageUrl:url
                })
            })

            
            }
        )
        

    }


    const createLinkPost = async (Type,Title,Page,Published,DisplayText,isInfo,isFile,fileType,file) =>{
        
        if(isFile === true){ 
            let picName = '.png'

            if(fileType ==='image') {
                picName = Title+'.png' 
            }

            if(fileType ==='audio') {
                picName = Title+'.mp3' 
            }
            
            console.log(picName)
            const uploadTask = storage.ref(`postImages/${picName}`).put(file);
            
            uploadTask.on(
                'state_changed',
                snapshot => {},
                error => {
                    console.log(error)
                },
                async ()=>{
                    await storage.ref('postImages').child(picName).getDownloadURL().then(url => {        
                    
                        console.log(url)                        
                        addDoc(regLinkPost, {
                            Type:Type,
                            Title:Title,
                            Page:Page,
                            Published:Published,
                            FileName:'file',
                            FileType:fileType,
                            imageUrl : url
                        })
                    })

                }
            
            )
        
        }else if(isInfo === true ){

            addDoc(regLinkPost, {
                Type:Type,
                Title:Title,
                Page:Page,
                Published:Published,
                DisplayText:DisplayText,
                isInfo:'True',
                FileName:'No file',
                FileType:'is info',
                imageUrl:'no File'

            })
        }else{

            
            addDoc(regLinkPost, {
                Type:Type,
                Title:Title,
                Page:Page,
                Published:Published,
                FileName:'No file',
                FileType:'No file',
                imageUrl:'no File'

            })
        }
    }



    const [myPostAdDisplay, setPostAdDisplay] = useState([])
    const [myPostAdImages, setPostAdImages] = useState([])
    const [myPostAdAudio, setPostAdAudio] = useState([])
    const [myPostAdTitleVisit, setAdTitleVisit] = useState([])

    
    useEffect(()=>{
        usingRefLinks.onSnapshot(querySnapshot =>{
            const withImages = []
            const withAudio  = []
            const titleVisit= []
            const isDisplayInfo= []
            querySnapshot.forEach(doc =>{
                if(doc.data().FileType === 'image'){
                    withImages.push(doc.data())
                }

                if(doc.data().FileType === 'audio'){
                    withAudio.push(doc.data())
                }

                if(doc.data().FileType === 'No file'){
                    titleVisit.push(doc.data())
                }

                if(doc.data().isInfo === 'True'){
                    isDisplayInfo.push(doc.data())
                }
            })
            setPostAdAudio(withAudio)
            setPostAdImages(withImages)
            setAdTitleVisit(titleVisit)
            setPostAdDisplay(isDisplayInfo)
        })

    },[])
    




    return (

        <AuthContext.Provider value={{
            usingRefHIROS,
            currentUser,
            updatePost,
            DeletePost,
            signup,
            login,
            forgotPassword,
            myState,
            createPostHandler,
            myData,
            createLinkPost,
            uploadProgress,
            myPostAdAudio,myPostAdImages,myPostAdDisplay,myPostAdTitleVisit
        }}>
        {children}
        </AuthContext.Provider>
    )
}