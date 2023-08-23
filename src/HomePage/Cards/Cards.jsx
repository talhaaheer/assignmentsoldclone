import './Cards.css'
import Button from '@mui/material/Button';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
export default function Cards() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 cardo p-1">
                            <div className="paet">
                                <div className='hdb'><Button className='hdbtn ' variant="contained">Hot Deals</Button></div>
                                <div className='idb'><Button className='idbtn' variant="contained">ID:20</Button></div>
                            </div>
                            <div className="parenttwo">
                                <div className='bedicn'>
                                    <BedIcon /> 1 bed
                                </div>
                                <div className='bathicn'>
                                    <BathtubIcon /> 2 bath
                                </div>
                                <div className='parkicn'>
                                    <LocalParkingIcon /> 1 Parking
                                </div>
                            </div>
                            <div className='firstline'>
                                <div className='hdb'><Button className='condo ' variant="contained">Condo</Button></div>
                                <div className='posted'> Posted: <span className='feb'>5-Feb</span> </div>
                            </div>
                            <p className='wasprice mb-0'>Was$110,789 <span className='sqt'>1100SQft</span></p>
                            <div className='allnowdb'>
                                <p className='nowprice mb-0 '>Now$80,789 <span className='sqt'>1100SQft</span></p>
                                <p className='clode'>Closed: <span>5-feb</span></p>
                            </div>
                            <p className=''>Mohalla Awan Town, Toronto,Canada</p>
                            <div className='comicon'>
                                <Button className='comparebtn' variant="contained"><CheckBoxOutlineBlankIcon />Compare</Button>
                                <FavoriteBorderIcon className='heart' />
                                <ShareIcon className='shre' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            card 2
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    maps
                </div>
            </div>
        </div>
    )
}
