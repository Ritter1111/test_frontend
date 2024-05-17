import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { getEmails } from '../../../store/api/api';
import Loader from '../../Loader/Loader';

export default function EmailsList() {
  const dispatch = useDispatch<AppDispatch>();

  const { emails, loading } = useSelector((state: RootState) => state.email);

  if (loading) {
    return <Loader />;
  }

  const handleNextPage = () => {
    const nextEndpoint = emails.next.split('?').slice(-1).join('');
    dispatch(getEmails('/?' + nextEndpoint));
  };

  const handlePrevPage = () => {
    const prevEndpoint = emails.previous.split('?').slice(-1).join('');
    dispatch(getEmails('/?' + prevEndpoint));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Recipient</TableCell>
                <TableCell>Subject</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emails.results.map((email) => (
                <TableRow key={email.id}>
                  <TableCell>{email.id}</TableCell>
                  <TableCell>{email.recipient}</TableCell>
                  <TableCell>{email.subject}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ mt: 10 }}>
                <ArrowLeftIcon
                  sx={{
                    color: emails.previous ? 'black' : 'grey',
                    cursor: 'pointer',
                  }}
                  onClick={emails.previous ? handlePrevPage : undefined}
                />
                <ArrowRightIcon
                  sx={{
                    color: emails.next ? 'black' : 'grey',
                    cursor: 'pointer',
                  }}
                  onClick={emails.next ? handleNextPage : undefined}
                />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
