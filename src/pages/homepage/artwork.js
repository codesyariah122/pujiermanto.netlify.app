import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
	margin-left:-1.5rem;
	svg{
		width: "360.000000pt"; 
		height: "360.000000pt";
	}
	@media (max-width: 768px) and (orientation: landscape) {
       svg{
		width: "360.000000pt"; 
		height: "360.000000pt";
		margin-left:.8rem;
		margin-top: -2rem;
       }
    }

    @media (max-width: 360px) {
        svg {
       		width: 100%;
       		height: 30vh;
        } 
    }
`

const Artwork = () => {
	return (
		<>
		<Wrap>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360.000000 360.000000"
 preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path className="animate" d="M2242 3074 c-12 -8 -32 -34 -45 -57 -19 -37 -22 -58 -24 -176 -1
-111 -5 -142 -23 -183 -41 -96 -26 -168 60 -277 35 -44 43 -64 56 -134 19
-111 18 -261 -2 -321 -32 -93 -125 -147 -218 -126 -91 20 -86 62 18 155 41 37
77 74 81 83 10 28 -22 58 -111 101 -172 84 -288 174 -279 215 2 12 11 56 20
98 l16 78 86 47 c128 72 216 178 181 221 -43 51 -190 -69 -252 -206 -11 -24
-39 -62 -63 -86 -49 -50 -56 -87 -25 -146 16 -30 17 -49 11 -135 -9 -130 5
-340 31 -439 11 -44 19 -80 18 -81 -2 -1 -24 5 -50 12 -35 10 -52 23 -68 47
-11 19 -52 60 -91 91 -102 82 -102 85 -34 185 53 77 57 87 52 128 -5 48 -39
92 -70 92 -27 0 -71 -51 -85 -98 -17 -55 -15 -126 4 -170 9 -20 16 -57 15 -82
-3 -81 58 -144 168 -176 52 -15 59 -20 104 -86 26 -39 45 -73 43 -76 -3 -2
-118 -5 -255 -6 -280 -1 -276 0 -296 -74 l-11 -37 -154 -5 c-138 -4 -159 -7
-191 -27 -49 -31 -64 -64 -64 -142 1 -119 83 -245 212 -328 85 -54 200 -96
265 -97 l56 -1 11 -53 c12 -62 57 -130 109 -169 20 -15 42 -31 47 -36 6 -6
-37 -7 -110 -4 -100 4 -154 14 -320 55 -263 67 -330 76 -520 75 -183 0 -535
-42 -535 -62 0 -4 48 0 108 10 259 42 491 50 668 24 57 -9 192 -38 300 -66
166 -41 220 -51 343 -59 92 -5 174 -17 221 -30 96 -27 299 -37 430 -21 52 6
196 36 320 66 285 68 368 82 564 96 163 12 490 0 581 -21 22 -5 41 -7 44 -4
23 23 -150 38 -439 39 -307 0 -381 -8 -645 -71 -318 -75 -368 -85 -480 -93
-168 -13 -415 11 -415 40 0 5 44 9 98 9 223 0 534 39 645 80 98 37 160 125
231 328 65 187 105 482 74 542 -24 46 -78 63 -220 68 l-128 5 26 30 c14 16 37
53 52 81 24 46 27 61 26 151 -1 172 -44 326 -123 438 -25 35 -36 71 -66 224
l-35 183 44 69 c25 38 57 93 72 122 58 115 16 229 -64 173z m68 -25 c26 -47 2
-122 -78 -248 l-40 -64 -8 38 c-10 54 1 173 21 223 29 72 81 97 105 51z m-264
-264 c17 -44 -61 -132 -168 -190 -38 -20 -68 -33 -68 -29 0 12 51 96 84 138
31 40 109 96 133 96 8 0 16 -7 19 -15z m-54 -640 c88 -46 134 -76 136 -89 3
-12 -21 -42 -77 -95 -69 -65 -81 -81 -81 -108 0 -79 148 -98 242 -31 72 50
103 206 75 383 -8 50 -13 92 -11 93 7 9 66 -109 84 -167 30 -96 52 -282 40
-337 -13 -58 -42 -114 -80 -158 l-30 -34 -154 -7 c-191 -9 -231 -3 -244 34 -6
18 -27 38 -53 52 -40 22 -45 30 -61 87 -33 122 -51 415 -32 510 l6 31 53 -47
c30 -26 114 -78 187 -117z m-430 54 c14 -27 16 -43 8 -67 -11 -40 -98 -164
-109 -157 -5 2 -14 24 -21 49 -18 64 1 151 43 204 19 24 61 10 79 -29z m673
-622 c29 -2 28 -3 -30 -40 -71 -45 -169 -77 -234 -77 -35 0 -59 8 -93 29 -54
35 -80 71 -50 71 10 0 26 6 35 13 13 9 62 11 180 9 89 -1 176 -4 192 -5z m349
-9 c57 -17 71 -47 69 -143 -6 -252 -119 -604 -226 -703 -83 -75 -284 -112
-704 -128 l-182 -7 -50 33 c-57 36 -103 90 -127 146 -12 29 -14 55 -9 119 9
100 -6 160 -72 287 -85 165 -190 221 -305 162 -36 -19 -68 -62 -68 -92 0 -44
39 -109 96 -162 56 -50 66 -55 233 -100 24 -6 54 -22 67 -35 29 -29 32 -71 5
-78 -37 -9 -127 15 -221 60 -174 84 -280 219 -281 358 -1 66 20 107 68 131 32
16 61 19 181 19 131 0 145 2 158 19 8 11 14 30 14 41 0 12 9 30 21 41 19 17
38 18 282 16 l262 -3 18 -24 c11 -14 39 -37 64 -51 92 -55 235 -24 378 81 l50
37 120 -7 c66 -3 137 -11 159 -17z m-1445 -242 c63 -33 138 -146 182 -273 19
-56 36 -163 20 -128 -17 38 -50 57 -138 80 -120 31 -136 38 -189 87 -81 75
-108 163 -61 205 12 11 31 25 42 31 29 16 111 15 144 -2z"/>
</g>
</svg>
</Wrap>
		</>
	)
}

export default Artwork