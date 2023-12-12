import React, { useState } from 'react';
import { Modal, Button } from '@heathmont/moon-core-tw';

interface ExampleProps {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }
  
  const Exampler: React.FC<ExampleProps> = ({ isOpen, openModal, closeModal }) => {

  return (
    <>
    
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="p-4 border-b-2 border-beerus">
            <h3 className="text-moon-18 text-bulma font-medium">
              Payment successful
            </h3>
          </div>
          <div className="p-4">
            <p className="text-moon-sm text-trunks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              blandit massa at lorem fermentum volutpat. Aliquam varius faucibus
              turpis, in facilisis dui dictum ac. Nulla ac consequat enim. Ut
              lobortis ultricies mauris eget volutpat. Aliquam aliquam nisl in
              nulla sagittis, eget viverra est ullamcorper. Morbi vel eros sed
              mauris dignissim congue et nec ligula. Duis quis tellus a est
              facilisis finibus. Duis varius libero id arcu pretium, et ultrices
              diam tincidunt. Aenean laoreet, velit at tempus eleifend, lectus
              turpis interdum ipsum, ac porta elit libero at arcu. Nam maximus
              magna vel orci pulvinar, et dignissim mi egestas. Pellentesque
              dapibus rhoncus ex, a finibus tortor sagittis quis. In nunc
              mauris, scelerisque vitae elit pulvinar, consequat accumsan leo.
              tortor eu faucibus vestibulum, nunc magna laoreet leo, ut
              elementum diam ipsum vitae purus. Vestibulum egestas sit amet elit
              egestas auctor. Mauris vestibulum ex at erat viverra ultricies.
              Suspendisse et nisi enim. Aenean ut velit sit amet diam aliquet
              molestie non quis urna. Praesent nec arcu non nisl maximus tempus
              in in ligula. Sed sodales eu elit facilisis tempus. Suspendisse
              viverra porta velit, mollis tempor purus aliquam id. Vestibulum
              sit amet vehicula dolor. Vestibulum orci nulla, sodales vitae
              euismod at, aliquam egestas sapien. Pellentesque et massa et
              lectus imperdiet ullamcorper. Integer sit amet semper nisl, sed
              suscipit eros. Nunc quis quam leo. Pellentesque porttitor, ex
              vitae ultrices interdum, sapien tellus dictum lectus, quis
              convallis elit felis vitae nulla. Nulla volutpat cursus urna, sed
              facilisis nisi consectetur sed. Praesent ac euismod odio. Mauris
              laoreet id ante vel finibus. Nulla nec egestas mi. Aenean leo
              lacus, imperdiet at lobortis nec, egestas ac mi. Praesent ut
              molestie est. Sed est dui, rhoncus eget semper id, egestas in
              sapien. Vestibulum aliquet, orci eget ultricies placerat, felis
              leo euismod enim, efficitur lacinia nulla ipsum non odio. Etiam id
              urna ut tortor egestas mattis. Nullam eget urna ac massa facilisis
              auctor nec at diam. Aliquam imperdiet, tortor non dignissim
              semper, eros sem congue lacus, a vehicula diam tellus ut ligula.
              Sed eget porta nibh, nec interdum urna. In tempor placerat massa,
              at imperdiet leo tincidunt eget. Vestibulum eu laoreet nisl, et amet felis. In aliquam ullamcorper nulla sit amet tristique.
              Pellentesque odio ipsum, pulvinar sit amet est eget, maximus
              accumsan leo. Aenean consequat tellus vel pulvinar bibendum.
              Suspendisse finibus volutpat nisl, id dictum est feugiat sit amet.
              Pellentesque euismod lectus leo. Integer imperdiet nisi egestas
              quam posuere, mollis imperdiet odio tincidunt. Nam non quam leo.
              Vivamus vulputate metus sed velit laoreet euismod id et turpis.
              Vestibulum dictum ac turpis quis ultrices. Vivamus non semper
              nunc. Nullam vitae facilisis vel, mattis ut ex. Morbi luctus ex eu est tincidunt
              lacinia. Sed commodo eget neque eget aliquet. Phasellus tincidunt
              justo imperdiet nunc scelerisque, sit amet interdum lorem
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
          <div className="p-4 border-t-2 border-beerus">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Exampler;
