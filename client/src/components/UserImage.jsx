import { Box } from "@mui/material";
const apiUrl = import.meta.env.VITE_API_URL;

const UserImage = ({ image, size = "60px" }) => {
	return(
		<Box width={size} height={size}>
			<img 
				style={{ objectFit: "cover", borderRadius: "50%" }}
				width={size}
				height={size}
				alt="user"
				src={`${apiUrl}/assets/${image}`}
			/>
		</Box>
	);
};

export default UserImage;