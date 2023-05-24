import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "../../store/selectors";

const ModalWindow = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  function closeHandler() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  return (
    <>
      {modal ? (
        <div onClick={closeHandler} className="modal-wrap">
          <div
            onClick={(event: React.MouseEvent) => event.stopPropagation()}
            className="modal-body"
          >
            {modal}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalWindow;
