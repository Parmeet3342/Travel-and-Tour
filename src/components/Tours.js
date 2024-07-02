import Card from './Card';

function Tours({tours,removeHandler}){
    return(
        <div className='wrapper'>
            <div >
               <h2 className='heading'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key = {tour.id} {...tour} removeHandler = {removeHandler}></Card>
                    })
                }
            </div>
        </div>
    );
};

export default Tours;