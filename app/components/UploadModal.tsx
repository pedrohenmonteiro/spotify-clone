import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useUploadModal from "../hooks/useUploadModal";
import Modal from "./Modal";
import { useState } from "react";
import Input from "./Input";

export default function UploadModal() {
  const [isLoading, setIsLoading] = useState();
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  function onChange(open: boolean) {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  }

  async function onSubmit(values: FieldValues) {}

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
      </form>
    </Modal>
  );
}
