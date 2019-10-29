import Landing from './components/mainContent/Landing.vue';
import FaceDetection from './components/mainContent/FaceDetection.vue';
import Ocr from './components/mainContent/Ocr.vue';

export const routes = [
    {path:'/',component:Landing},
    {path:'/FaceDetection',component:FaceDetection},
    {path: '/OCR',component:Ocr}
];