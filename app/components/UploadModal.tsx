import useUploadModal from "../hooks/useUploadModal";
import Modal from "./Modal";

export default function UploadModal() {
  const uploadModal = useUploadModal();

  function onChange(open: boolean) {
    if (!open) uploadModal.onClose();
  }

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
}
