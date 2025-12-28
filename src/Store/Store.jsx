import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import listSlice from '../Slice/ListSlice'

const Store =  configureStore({
    reducer:{
        list:listSlice
    }
})
export default Store
