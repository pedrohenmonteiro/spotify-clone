"use client";

import Modal from "./Modal";

export default function AuthModal() {
  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      Auth modal chilfren!
    </Modal>
  );
}
