import colors from "./colors";

const baseStyles = {
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between"
	},
	flexRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
};

const styles = {

	panel: {
		mainContainer: {
			// width: "100%",	// no need for this if body: 100%
		},
		main: {
			height: "50px",
			backgroundColor: colors.primaryBackground,
			color: colors.contrastText,
			padding: "20px",
			fontSize: "2rem",
			...baseStyles.flexRow,
		},
		options: {
			...baseStyles.flexRow,
			marginLeft: '2rem',
			marginRight: '2rem',
		},
		option: {
			marginLeft: '1rem',
			marginRight: '1rem',
		}
	},

	card: {
		position: "relative",
		border: "1px solid gray",
		borderRadius: "5px",
		padding: "5px",
		// maxWidth: '300px',
		// ...baseStyles.flexColumn,
		height: "100px",
		width: "200px"
	},
	nameContainer: {
		position: 'absolute',
		top: '5px',
		left: '5px',
	},
	content: {
		fontSize: '0.75rem',
		position: 'absolute',
		top: '30%',
		left: '5px',
	},
	name: {
		fontSize: "1rem",
		fontWeight: 'bold',
		cursor: 'pointer',
		color: colors.primaryText,
	},
	tagsContainer: {
		position: 'absolute',
		bottom: '5px',
		left: '5px',
	},
	tag: {
		fontSize: "0.75rem",
		backgroundColor: colors.primaryBackground,
		color: "white",
		// border: '1px solid blue',
		display: "inline-block",
		padding: "5px",
		borderRadius: "2px",
		marginRight: "5px",
	},
	avatarContainer: {
		position: 'absolute',
		top: '5px',
		right: '5px',
	},
	avatarImage: {
		borderRadius: '50%',	//circle
		height: '25px',
		width: '25px',
	},
	estimateContainer: {
		position: 'absolute',
		bottom: '5px',
		right: '5px',
	},
	estimate: {
		fontSize: '0.75rem',
		borderRadius: '2px',
		border: '1px solid darkgray',
		backgroundColor: 'lightgray',
		padding: '1px',
	}
};

export default styles;