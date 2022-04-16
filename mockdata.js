// // INSERT INTO jobs (jobName, about, goodSides, badSides, imgUrl) VALUES 
// // (
// //     'Programming',
// //     "Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing/building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).",
// //     "Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.",
// //     "Tasks accompanying and related to programming include testing, debugging, source code maintenance, implementation of build systems, and management of derived artifacts, such as the machine code of computer programs.",
// //     "./img/chicken_togora.jpeg"
// // );


// export default async function (sequelize) {

// 	const jobs = await sequelize.models.Job.build([
// 		{ jobName: "Programming",
//         about: "Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing/building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).",
//         goodSides: "Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.", badSides: "Tasks accompanying and related to programming include testing, debugging, source code maintenance, implementation of build systems.",
//         imgUrl: "./img/chicken_togora.jpeg" },
// 		{ jobName: "Dizayn",
//         about: "Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing/building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).",
//         goodSides: "Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.", badSides: "Tasks accompanying and related to programming include testing, debugging, source code maintenance, implementation of build systems.",
//         imgUrl: "./img/chicken_togora.jpeg" },
// 		{ jobName: "Data Sciens",
//         about: "Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing/building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).",
//         goodSides: "Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.", badSides: "Tasks accompanying and related to programming include testing, debugging, source code maintenance, implementation.",
//         imgUrl: "./img/chicken_togora.jpeg" }
// 	])
	
// 	const comments = await sequelize.models.Comment.build([
// 		{ info: "Programmable devices have existed for centuries.", jobId: 1 },
// 		{ info: "Programmable devices have existed for centuries.", jobId: 2 },
// 		{ info: "Programmable devices have existed for centuries.", jobId: 3 },
// 		{ info: "Programmable devices have existed for centuries.", jobId: 1 },
// 	])
	
// 	const adverts = await sequelize.models.Advert.build([
// 		{ info: "Programmable devices have existed for centuries. Programmable devices have existed for centuries. Programmable devices have existed for centuries. Programmable devices have existed for centuries.", jobId: 1 },
// 		{ info: "Programmable devices have existed for centuries. Programmable devices have existed for centuries. Programmable devices have existed for centuries. Programmable devices have existed for centuries.", jobId: 2 },
// 		{ info: "Programmable devices have existed for centuries. Programmable devices have existed for centuries. Programmable devices have existed for centuries. Programmable devices have existed for centuries.", jobId: 3 }
// 	])

// 	await Promise.all(jobs.map(async job => await job.save()))
// 	await Promise.all(comments.map(async comment => await comment.save()))
// 	await Promise.all(adverts.map(async advert => await advert.save()))
// }
    