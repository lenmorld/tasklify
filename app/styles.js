const baseStyles = {
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between"
	}
};

const taskStyles = {
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
		bottom: '5px',
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
	},
	tagsContainer: {
		position: 'absolute',
		bottom: '5px',
		left: '5px',
	},
	tag: {
		fontSize: "0.75rem",
		backgroundColor: "blue",
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
	}
};

export default taskStyles;