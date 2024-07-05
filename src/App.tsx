import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ImageCrop from './components/image-crop/ImageCrop'

function App() {

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='image-crop' element={<ImageCrop />} />
    </Routes >
  )
}

export default App
