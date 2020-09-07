import * as React from "react";

const IconPeace = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-peace" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={9} /><line x1={12} y1={3} x2={12} y2={21} /><line x1={12} y1={12} x2={18.3} y2={18.3} /><line x1={12} y1={12} x2={5.7} y2={18.3} /></svg>;

export default IconPeace;