import fs from 'fs/promises'
import { extractColors } from '@ltcode/color-extractor'

//Extracts dominant colors of an image and returns them as an array
const ExtractColors = async (imgUrl: string): Promise<string[]> => {
    const imgBuffer = await fs.readFile(imgUrl);

    if(!imgUrl){
        return []
    }
    else{
        const colors = await extractColors(imgBuffer) as string[];
        console.log('Colors: ', colors);
        return colors;
    }
}

export default ExtractColors;