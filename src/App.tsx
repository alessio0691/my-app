import * as React from "react"
import {
  ChakraProvider,
  theme,
  
} from "@chakra-ui/react"
import Layout from "./Layout"
import { Routes, Route } from "react-router-dom"
import ProjectPage from "./pages/ProjectPage"
import AboutPage from "./pages/AboutPage"
import Contact from "./pages/Contact"
import Ecommerce from "./pages/Ecommerce"
import HomePage from "./pages/HomePage"
import ProjectTwo from "./pages/Project2"
import ProjectOne from "./pages/ProjectOne"
import ProjectThree from "./pages/ProjectThree"
import { Work } from "./pages/WorkPage"



export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Routes>
        <Route   path="/" element={<HomePage/>} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/work/commerce" element={<Ecommerce />} />
        <Route path="/work" element={<Work/>} />
        <Route path="/project/2" element={<ProjectTwo />} />
        <Route path="/project/1" element={<ProjectOne />} />
        <Route path="/project/3" element={<ProjectThree />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </ChakraProvider>
)
