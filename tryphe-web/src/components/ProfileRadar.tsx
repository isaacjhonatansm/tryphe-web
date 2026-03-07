import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from "recharts";

type Props = {
  profile:number[];
};

export default function ProfileRadar({ profile }:Props){

  const data = [

    { trait:"Citrus", value:profile[0] },
    { trait:"Floral", value:profile[1] },
    { trait:"Woody", value:profile[2] },
    { trait:"Fresh", value:profile[3] },
    { trait:"Sweet", value:profile[4] },
    { trait:"Oriental", value:profile[5] }

  ];

  return(

    <div style={{width:"100%",height:260}}>

      <ResponsiveContainer>

        <RadarChart data={data}>

          <PolarGrid stroke="#444" />

          <PolarAngleAxis dataKey="trait" />

          <PolarRadiusAxis />

          <Radar
            dataKey="value"
            stroke="#d4af37"
            fill="#d4af37"
            fillOpacity={0.4}
          />

        </RadarChart>

      </ResponsiveContainer>

    </div>

  );

}