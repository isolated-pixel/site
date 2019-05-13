import React from 'react'
import styles from "./post.module.scss"
export function Post(){
    return <div className={styles.post}>
        <h1>
            Post Title
        </h1>
        <p>Post Description</p>
    </div>
}