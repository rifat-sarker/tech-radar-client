import { useNavigate } from "react-router-dom";

const Brand = () => {
    const navigate = useNavigate();
    const handleApple =()=>{
        navigate('/apple');
    }
    const handleSamsung =()=>{
        navigate('/samsung');
    }
    const handleHuawei =()=>{
        navigate('/huawei');
    }
    const handleNokia =()=>{
        navigate('/nokia');
    }
    const handleGoogle =()=>{
        navigate('/google');
    }
    const handleSony =()=>{
        navigate('/sony');
    }
  return (
    <div>
      <h1 className="text-4xl text-center my-8">All Brands</h1>
      <div  className="grid md:grid-cols-3 gap-8 mb-12">
        {/* apple */}
        <div onClick={handleApple} className="card max-h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="w-full h-60"
              src="https://i.ibb.co/b3C0Pk1/overview-bcphzsdb4fpu-og.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Apple</h2>
            <small className="font-semibold">
              Discover the innovative world of Apple
            </small>
          </div>
        </div>
        {/* Huawei */}
        <div onClick={handleHuawei} className="card max-h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="w-full h-60"
              src="https://i.ibb.co/Cnv8bJf/huawei-horizontal6099-logowik-com.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Huawei</h2>
            <small className="font-semibold">
              Huawei is a leading global provider of information and
              communications technology (ICT)
            </small>
          </div>
        </div>
        {/* Samsung */}
        <div onClick={handleSamsung} className="card max-h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="w-full h-60"
              src="https://i.ibb.co/rHNRxRM/samsung-logo-Know-Your-Codes-11zon-1000x480.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Samsung</h2>
            <small className="font-semibold ">
              Discover the latest in electronic & smart appliance technology
              with Samsung
            </small>
          </div>
        </div>
        {/* Nokia */}
        <div onClick={handleNokia} className="card max-h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="w-full h-60"
              src="https://i.ibb.co/mBZ3rzb/Nokia-logo.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nokia</h2>
            <small className="font-semibold">
              At Nokia, we create technology that helps the world act together
            </small>
          </div>
        </div>
        {/* Sony */}
        <div onClick={handleSony} className="card max-h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="w-full h-60"
              src="https://i.ibb.co/W6fq6Sw/og-sony-logo.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sony</h2>
            <small className="font-semibold">
              At Sony, we believe in the power of creativity and technology.{" "}
            </small>
          </div>
        </div>
        {/* Google */}
        <div onClick={handleGoogle} className="card max-h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="w-full h-60"
              src="https://i.ibb.co/TL5n1SZ/a910d418-7123-4bc4-aa3b-ef7e25e74ae6-81843175e48a9129.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Google</h2>
            <small className="font-semibold">
              Discover stories about our culture, philosophy, and how Google
              technology is impacting others.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
