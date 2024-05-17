import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
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

export default function EmailsList() {
  const emails = useSelector((state: RootState) => state.email.emails);

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
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
