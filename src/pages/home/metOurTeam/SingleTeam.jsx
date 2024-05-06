

const SingleTeam = ({ t }) => {
    const { photo, expertise, name } = t;
    return (
        <div className="card w-96 p-4 mb-10 border hover:border mt-8 hover:border-green-600 hover:scale-105 transition  shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">spacialist</div>
                </h2>
                <p>{expertise}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Car Doctor</div>
                    <div className="badge badge-outline">Enggeniar</div>
                </div>
            </div>
        </div>
    );
};

export default SingleTeam;