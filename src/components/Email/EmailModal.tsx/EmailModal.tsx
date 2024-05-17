import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { createEmail, getEmails } from '../../../store/api/api';
import { modalStyle } from '../../../utils/const';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function EmailModal() {
  const [open, setOpen] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
  };

  const handleSubmit = () => {
    try {
      const message = editorState.getCurrentContent().getPlainText('\u0001');
      dispatch(createEmail({ sender: user.id, recipient, subject, message }));
      dispatch(getEmails('/'));
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
      setRecipient('');
      setSubject('');
    }
  };

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
        onClick={handleOpen}
      >
        Write Email
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
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
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Отправить
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
