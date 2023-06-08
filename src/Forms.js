import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Typography, FormLabel, TextField , Grid, Divider, RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material'
import Logo from './logo.jpg'
import './App.css';

function Forms() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [setSelectedOption] = React.useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    //    Form submission
    const onFormSubmission = (userObj) => {
        console.log(userObj)
    }

    return (
        <div>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                <Typography variant="h6" component="div">
                <img src={Logo} alt="Logo" style={{ height: '250px', marginRight: '10px' }} />
                </Typography>
                </Box>
            <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmission)} >
                {/* Username */}
                <Grid>
                <Typography variant='h4' color='primary'>
                    Customer Information
                </Typography>
                <Divider variant='h1' color='primary' sx={{ marginBottom : "10px" , marginTop : "3px"}} />
                <Typography variant="subtitle1" color="primary">
                  Name
                </Typography>
                <TextField
                type='text'
                id=""
                margin="dense"                
                sx={{ marginBottom: '0.5rem' }}
                {...register('username', {
                    required : true ,
                    minLength: '4', 
                    maxLength: '15' ,
                })}
                placeholder="Enter your Name"
                fullWidth
                variant="outlined"
                />
                {errors.username?.type === 'required' && <p style = {{ color : 'red' }}>*Name is Required</p>}
                {errors.username?.type === 'minLength' && <p style = {{ color : 'red' }} >*Minimum 4 characters </p>}
                {errors.username?.type === 'maxLength' && <p style = {{ color : 'red' }}>*Maximum 15 characters </p>}
                

                {/* address */}
                <Typography variant="subtitle1" color="primary">
                  Address
                </Typography>
                <TextField
                margin="dense"                
                sx={{ marginBottom: '0.5rem' }}
                {...register('streetaddress', {
                    required : true ,
                })}
                placeholder="street adress"
                fullWidth
                variant="outlined"
                />
                {/* street */}
                <TextField
                margin="dense"                
                sx={{ marginBottom: '0.5rem' }}
                {...register('streetaddressline2', {
                })}
                placeholder="street adress line 2"
                fullWidth
                variant="outlined"
                />  
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} lg={6} sm={3}>
                        {/* city */}
                            <TextField
                            margin="dense"                
                            {...register('city', {
                                required : true , 
                            })}
                            placeholder="City"
                            fullWidth
                            variant="outlined"
                            />
                    </Grid>
                    <Grid item xs={6}  md={6} lg={6} sm={3}>
                            {/*  state */}
                            <TextField
                            margin="dense"                
                            {...register('state', {
                                required : true ,
                            })}
                            placeholder="state"
                            fullWidth
                            variant="outlined"
                            />
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} sm={3}>
                            {/*  pincode */}
                            <TextField
                            margin="dense"                
                            sx={{ marginBottom: '0.5rem' , marginTop : "-8px" }}
                            {...register('pincode', {
                                required : true ,
                            })}
                            placeholder="pincode"
                            fullWidth
                            variant="outlined"
                            />
                         {errors.pincode?.type === 'required' && <p style = {{ color : 'red' }}>*PinCode is required</p>}
                   
                    </Grid>
                </Grid>
                
                {/* phone number  */}
                <Typography variant="subtitle1" color="primary" sx={{ marginTop : "0.5rem"}}>
                  Phone number
                </Typography>
                <TextField
                margin="dense"       
                type='number'         
                sx={{ marginBottom: '0.5rem' }}
                {...register('phoneNumber', {
                    required : true ,
                })}
                placeholder="Enter your Phone number"
                fullWidth
                variant="outlined"
                />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }}>*Phone number is required</p>}
    
                {/* email */}
                <Typography variant="subtitle1" color="primary">
                  Email 
                </Typography>
                <TextField
                type='email'
                margin="dense"                
                sx={{ marginBottom: '1rem' }}
                {...register('email', {
                    required : true ,
                })} 
                placeholder="Enter your Email"
                fullWidth
                variant="outlined"
                />
                {errors.email?.type === 'required' && <p style = {{ color : 'red' }}>*Email is required</p>}
                </Grid>

                <Grid sx = {{ marginBottom : "3rem" }}>
                    <Divider color='primary' sx ={{ marginBottom : "2rem"}}/>
                <Typography variant='h4' color='primary'>
                    Customer Feedback 
                </Typography>
                <Divider color='primary' sx={{ marginTop : "0.4rem"}}/>

                <>
            <FormControl component="fieldset">
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>1. Did our staff greet you in a friendly manner?</Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="yes" control={<Radio />} label="YES" />
                <FormControlLabel value="no" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="NO" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                
                </RadioGroup>
                {/* 2nd */}
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>2. Did our staff answered all yours questions?</Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="yes" control={<Radio />} label="YES" />
                <FormControlLabel value="no" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="NO" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                </RadioGroup>
                {/* 3rd qn */}
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>3. Did our staff able to resolve your issue or concern ?</Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="yes" control={<Radio />} label="YES" />
                <FormControlLabel value="no" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="NO" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                </RadioGroup>
                {/* 4th */}
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>4. Please rate your customer expereience </Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                <FormControlLabel value="Above Average" control={<Radio />} label="Above Average" />
                <FormControlLabel value="Average" control={<Radio />} label="Average" />
                <FormControlLabel value="Below Average" control={<Radio />} label="Below Average" />
                <FormControlLabel value="Poor" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="Poor" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                </RadioGroup>
                {/* 5th */}
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>5. How likely would you recommend our products to your friends or family members?</Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="Not at all" control={<Radio />} label="Not at all" />
                <FormControlLabel value="Maybe"  control={<Radio />} label="Maybe" />
                <FormControlLabel value="Extremely likely" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="Extremely likely" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                </RadioGroup>
                {/* 7th */}
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>6. Please rate the quality of the product</Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="Very high quality" control={<Radio />} label="Very high quality" />
                <FormControlLabel value="Somewhat high quality"  control={<Radio />} label="Somewhat high quality" />
                <FormControlLabel value="Neither high or low"  control={<Radio />} label="Neither high or low" />
                <FormControlLabel value="Low quality"  control={<Radio />} label="Low quality" />
                <FormControlLabel value="VeryLow quality" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="VeryLow quality" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                </RadioGroup>
                {/* 7th */}
                <FormLabel component="legend"><Typography sx={{fontWeight : "bold"}} variant='dark'>7. Please rate value for money of the product</Typography></FormLabel>
                <RadioGroup name="question" defaultValue='' ref={register('question-1' , { })}>
                <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                <FormControlLabel value="Above Average"  control={<Radio />} label="Above Average" />
                <FormControlLabel value="Average"  control={<Radio />} label="Average" />
                <FormControlLabel value="Below Average"  control={<Radio />} label="Below Average" />
                <FormControlLabel value="Poor" sx ={{ marginBottom : "2rem"}} control={<Radio />} label="Poor" />
                {errors.phoneNumber?.type === 'required' && <p style = {{ color : 'red' }} sx ={{ marginBottom : "2rem"}}>*This Field is required</p>}

                </RadioGroup>

            </FormControl>

                <div className='mb-4'>
                <Typography variant="subtitle1" color="primary">
                8. Please tell us how can we make your experience better
                </Typography>
                    <textarea name="" id="" rows="5" className='form-control' {...register("feedback", { required: false })}></textarea>
                    {errors.feedback?.type === 'required' && <p className=''>*Feedback is required </p>}
                </div>

                <div className='mb-4'>
                <Typography variant="subtitle1" color="primary">
                9. Please tell us how can we improve our products
                </Typography>
                    <textarea name="" id="" rows="5" className='form-control' {...register("feedback", { required: false })}></textarea>
                    {errors.feedback?.type === 'required' && <p className=''>*Feedback is required </p>}
                </div>
                <div className='mb-4'>
                <Typography variant="subtitle1" color="primary">
                10. Do you have any other comments, questions or concerns?
                </Typography>
                    <textarea name="" id="" rows="5" className='form-control' {...register("feedback", { required: false })}></textarea>
                    {errors.feedback?.type === 'required' && <p className=''>*Feedback is required </p>}
                </div>
                </>   
                </Grid>
                <button Linkto="Forms" type='submit' className="algn btn btn-info mx-auto mb-3">
                Submit
                </button>
            </form>
        </div>
    );
}


export default Forms;