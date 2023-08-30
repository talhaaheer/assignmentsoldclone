import './Cards.css'
import Button from '@mui/material/Button';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from '../../Config';

export default function Cards() {
    // for storing mutiple data
    const [data, setData] = useState([]);
    // for storing sting 
    // const [data1, setData1] = useState();
    // for storing numbers
    // const [data2, setData2] = useState(0);
    useEffect(() => {
        axios
            .get(`${baseURL}/api/Assignment/GetAssignments`)
            .then((response) => {
                setData(response.data);
                // setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                // setIsLoading(false);
            });
    }, []);
    //   console.log("my api response",data )
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 crst fef">
                    {data?.data?.map((item) => (
                        <div key={item.id} className="row crst2">
                            <div className="col-12 cardo p-1">
                                <div className="blackshade">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='hdb'><Button className='hdbtn ' variant="contained">Hot Deals</Button></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='idb'><Button className='idbtn' variant="contained">ID:{item.id}</Button></div>
                                    </div>
                                </div>
                                <div className='iconsdf'> </div>
                                <div className='bbl'>
                                    <BedIcon />
                                    <BathtubIcon />
                                    <LocalParkingIcon />
                                </div>
                                </div>
                            
                          
                            </div>
                            <div className="cardbodys">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='hdb'><Button className='condo ' variant="contained">Condo</Button></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='posted'> Posted: <span className='feb'>5-Feb</span> </div>

                                    </div>
                                </div>
                                <p className='wasprice mb-0'>Was ${item.assignmentPrice}<span className='sqt'>1100SQft</span></p>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <p className='nowprice mb-0 '>Now ${item.originalPrice} <span className='sqt'>1100SQft</span></p>
                                    </div>
                                    <div className="col-lg-5">
                                        <p className='clode'>Closed: <span>5-feb</span></p>
                                    </div>
                                </div>
                                <div>
                                    {item.projectName}
                                </div>
                                <div>
                                    {item.developer} | {item.address}
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {item.highlight.slice(0,20)}
                                    </div>
                                </div>
                                <div className='allnowdb'>
                                </div>
                                {/* <p className=''>{item.city}</p> */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Button className='comparebtn' variant="contained"><CheckBoxOutlineBlankIcon />Compare</Button>
                                    </div>
                                    <div className="col-lg-6 heartshre">
                                        <FavoriteBorderIcon />
                                        <div className='fvt'></div>
                                        <ShareIcon />
                                    </div>
                                </div>
                                </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108208.76133046873!2d72.61463062320021!3d32.055078894257015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39217439502694e3%3A0x55e1bad6edcbbc70!2sSargodha%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692882890556!5m2!1sen!2s" style={{ width: "100%", height: "100%" }} loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}
