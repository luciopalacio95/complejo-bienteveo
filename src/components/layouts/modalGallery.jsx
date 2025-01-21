
import { useState } from "react";
import { TbPhotoShare } from "react-icons/tb";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ModalGallery(props){
    const [openGallery, setOpenGallery] = useState(false);
    return (
        <>
            <button
                className="bg_inferior inline-flex items-center hover:opacity-80 text-white text-lg font-medium px-3 py-2 border rounded-md"
                onClick={() => setOpenGallery(true)}
            >
            Ver fotos y videos
                <TbPhotoShare className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
            </button>
            <Lightbox
                open={openGallery}
                close={() => setOpenGallery(false)}
                plugins={[Captions, Counter, Fullscreen, /*Thumbnails,*/ Zoom, Video]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                slides={ props.fotos }
            />
        </>
    );
}