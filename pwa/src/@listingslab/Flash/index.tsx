import Flash from "./Flash";
import {selectFlash, setFlashKey} from "./flashSlice";
import MovieClip from "./MovieClip";
import Pingpongball from "./MovieClips/Pingpongball";
import Macromedia from "./MovieClips/Macromedia";
import FlickrIcon from "./MovieClips/FlickrIcon";
import InstagramIcon from "./MovieClips/InstagramIcon";
import YouIcon from "./MovieClips/YouIcon";
import {getElement} from "./ActionScript/getElement";
import {getElementSize} from "./ActionScript/getElementSize";
import {fadeIn} from "./ActionScript/fadeIn";
import {fadeOut} from "./ActionScript/fadeOut";
import {align} from "./ActionScript/align";
import {offset} from "./ActionScript/offset";
import {setPosition} from "./ActionScript/setPosition";
import {setOpacity} from "./ActionScript/setOpacity";
import {setScale} from "./ActionScript/setScale";
import {animateSpin} from "./ActionScript/animateSpin";
import {animatePosition} from "./ActionScript/animatePosition";
import {animateDropbounce} from "./ActionScript/animateDropbounce";
import {animateScale} from "./ActionScript/animateScale";
import {animateThrowBounce} from "./ActionScript/animateThrowBounce";
import {animateFadein} from "./ActionScript/animateFadein";
import {getMovieClipSize} from "./ActionScript/getMovieClipSize";
import {getFlashSize} from "./ActionScript/getFlashSize";

export {
    Flash,
    MovieClip,
    align,
    offset,
    fadeIn,
    fadeOut,
    animateSpin,
    animateScale,
    animatePosition,
    animateFadein,
    animateDropbounce,
    animateThrowBounce,
    setPosition,
    setScale,
    setOpacity,
    getFlashSize,
    getMovieClipSize,
    getElement,
    getElementSize,
    selectFlash, 
    setFlashKey,
    Macromedia,
    Pingpongball,
    FlickrIcon,
    InstagramIcon,
    YouIcon,
};
