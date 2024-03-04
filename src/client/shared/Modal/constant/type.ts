export type ModalProps = {
	className?: string;
	openModal: boolean;
	modalContent: React.JSX.Element;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
