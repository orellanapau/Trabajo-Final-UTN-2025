// Acá estás todos los iconos que voy a utilizar
import { FiSettings, FiChevronLeft, FiX, FiMoreVertical, FiPhoneOutgoing, FiRadio, FiUsers, FiPaperclip, FiSlash, FiTrash2, FiCamera, FiSend } from "react-icons/fi";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { RiChatNewLine } from "react-icons/ri";
import { RiEmojiStickerLine } from "react-icons/ri";


const ICONS = {
    Settings: FiSettings,
    Atras: FiChevronLeft,
    Cruz: FiX,
    TresPuntos: FiMoreVertical,
    Llamada: FiPhoneOutgoing,
    Chat: MdOutlineMarkUnreadChatAlt,
    Estados: FiRadio,
    Grupos:FiUsers,
    NewChat: RiChatNewLine,
    Clip: FiPaperclip,
    Bloquear: FiSlash,
    Eliminar: FiTrash2,
    Emoji: RiEmojiStickerLine,
    Camara: FiCamera,
    Enviar: FiSend,
}

export default ICONS

//para llamarlos es
// import ICONS from '../../constants/icons'
// <ICONS.Settings/> 