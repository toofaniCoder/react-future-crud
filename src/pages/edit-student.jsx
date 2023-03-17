import { useEffect } from 'react';

import { Box, Card, Typography, Input, Grid, Stack, Button } from '@mui/joy';
import DoneIcon from '@mui/icons-material/Done';
import UndoIcon from '@mui/icons-material/Undo';
import { useForm, Controller, Form } from 'react-hook-form';
import { Link, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';

const CreateStudent = () => {
  const navigate = useNavigate();
  const student = useLoaderData();
  //   console.log(student);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      avatar: '',
      name: '',
      address: '',
      standard: '',
      roll: '',
      section: '',
    },
  });

  useEffect(() => {
    reset(student);
  }, []);
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        padding: theme.spacing(4),
        bgcolor: theme.vars.palette.neutral[100],
      })}
    >
      <Card
        component={Stack}
        rowGap={2}
        sx={(theme) => ({ px: theme.spacing(4), pb: theme.spacing(4) })}
      >
        <Typography level="h4">Edit student</Typography>

        <Grid
          component={Form}
          control={control}
          method="put"
          headers={{
            'Content-Type': 'application/json',
          }}
          action={`${axios.defaults.baseURL}/students/${student.id}`}
          onSuccess={() => {
            navigate('/students', { replace: true });
          }}
          spacing={4}
          container
        >
          <Grid md={4} item>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Enter Your Full Name"
                  size="lg"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Enter Your Full Address"
                  size="lg"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Controller
              name="standard"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter Your Class" size="lg" {...field} />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Controller
              name="roll"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Enter Your Roll Number"
                  size="lg"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Controller
              name="section"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter Your Section" size="lg" {...field} />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Controller
              name="avatar"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Enter Your Avatar URL"
                  size="lg"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Button
              color="warning"
              type="submit"
              startDecorator={<DoneIcon />}
              sx={{ mr: 2 }}
            >
              Update Student
            </Button>
            <Button
              component={Link}
              to="../.."
              relative="path"
              startDecorator={<UndoIcon />}
              variant="outlined"
              color="neutral"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CreateStudent;
