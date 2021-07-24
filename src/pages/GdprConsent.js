import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
function GdprConsent({ history }) {
  const [lgShow, setLgShow] = useState(true);

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setLgShow(false);
          history.push("/");
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Agreement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam
          corrupti quos, perspiciatis voluptate in blanditiis laudantium
          laboriosam ex soluta quisquam esse sequi mollitia veniam? Reiciendis
          numquam, molestias error recusandae fugit sed quisquam nesciunt vero.
          Quisquam ea vel, incidunt aut illo minima ut impedit deleniti quas
          eaque cupiditate voluptas maiores provident mollitia dolorem inventore
          sit commodi similique accusantium officia nemo, autem quia? Tempora,
          impedit sint commodi officia inventore nam quam, facere adipisci error
          consequatur laudantium soluta dicta ipsa harum reprehenderit,
          consequuntur eius. Dolore quam veritatis voluptatibus, voluptates
          harum dignissimos amet asperiores voluptas incidunt iste adipisci quia
          debitis, pariatur temporibus in!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GdprConsent;
