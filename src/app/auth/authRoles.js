/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	student: ['admin', 'student'],
	parent: ['admin', 'parent'],
	teacher: ['admin','teacher'],
	librarian: ['admin','librarian'],
	accountant: ['admin','accountant'],
	employee: ['admin', 'employee'],
	guest: []
};

export default authRoles;
