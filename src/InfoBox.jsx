import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const imgUrl =
    "https://media.istockphoto.com/id/668658580/photo/blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZJrYdzeyBgK_D-O4IJ9ZY69o2c0xe8XPZQJxFlJ76So=";

  const rainy =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

  const hot =
    "https://images.unsplash.com/photo-1445297983845-454043d4eef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bm55fGVufDB8fDB8fHww";

  const cold =
    "https://images.unsplash.com/photo-1579847196901-f0555354b06a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGNvbGR8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="info">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 90 ? rainy : info.temp > 18 ? hot : cold}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 18 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: "black" }}>
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>Minimum Temp= {info.tempMin}&deg;C</div>
              <div>Maximum Temp= {info.tempMax}&deg;C</div>
              <div>
                The weather can be described as <b>{info.weather}</b> and feels
                like {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
