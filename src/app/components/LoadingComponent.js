import React from 'react'
import styles from "./loading.module.css"
const LoadingComponent = () => {
  return (
    <div className={styles.loader_wrapper}>
    <div className={styles.loader}>
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
  
  <div className={styles.covers}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
    </div>
  )
}

export default LoadingComponent