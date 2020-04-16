/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	student: ['admin', 'student'],
	parent: ['admin', 'parent'],
	teacher: ['admin', 'teacher'],
	librarian: ['admin', 'librarian'],
	accountant: ['admin', 'accountant'],
	employee: ['admin', 'employee'],
	university: ['university'],
	school: ['school'],
	guest: []
};

export default authRoles;
