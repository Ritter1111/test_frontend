import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { createEmail } from '../../../store/slices/Auth.slice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EmailModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [message, setMessage] = useState('');
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const text = editorState.getCurrentContent().getPlainText('\u0001');
    setMessage(text);
  };

  const handleSubmit = () => {
    dispatch(createEmail({ sender: user.id, recipient, subject, message }));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="h5">Отправка письма</Typography>
            <TextField
              label="Отправитель"
              value={user?.email}
              disabled
              fullWidth
              margin="dense"
            />
            <TextField
              label="Получатель"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Тема письма"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              margin="dense"
            />
            <div
              style={{
                border: '1px solid #ddd',
                padding: '8px',
                marginTop: '8px',
              }}
            >
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                placeholder="Введите текст письма..."
              />
            </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Отправить
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
