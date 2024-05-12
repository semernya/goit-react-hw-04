import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export default function ImageModal({ img, likes, user, modalState, onClose }) {
    return (
        <div>
            <Modal isOpen={modalState} onClose={onClose} style={customStyles}>
                <img src={img} />
                <div>
                    <p>Likes: {likes}</p>
                    <p>Instagram: {user}</p>
                </div>
            </Modal>
        </div>
    )
}