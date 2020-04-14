import { authRoles } from 'app/auth';
import i18next from 'i18next';
import en from './navigation-i18n/en';
import ar from './navigation-i18n/ar';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('ar', 'navigation', ar);

// const navigationConfig = [
// 	{
// 		id: 'management',
// 		title: 'Management',
// 		translate: 'MANAGEMENT',
// 		type: 'group',
// 		icon: 'apps',
// 		children: [
// 			{
// 				id: 'dashboard',
// 				title: 'Dashboard',
// 				translate: 'DASHBOARD',
// 				type: 'item',
// 				icon: 'dashboard',
// 				url: '/sms/dashboard'
// 			},
// 			{
// 				id: 'frontoffice',
// 				title: 'Front Office',
// 				translate: 'FRONTOFFICE',
// 				auth: authRoles.admin,
// 				type: 'item',
// 				icon: 'location_city',
// 				url: '/sms/frontoffice'
// 			},
// 			// {
// 			// 	id: 'profiles',
// 			// 	title: 'Profile',
// 			// 	translate: 'PROFILE',
// 			// 	type: 'collapse',
// 			// 	icon: 'person',
// 			// 	children: [
// 			// 		{
// 			// 			id: 'profile',
// 			// 			title: 'Profile Settings',
// 			// 			translate: 'PROFILESETTINGS',
// 			// 			type: 'item',
// 			// 			url: '/sms/profile'
// 			// 		},
// 			// 		{
// 			// 			id: 'applications',
// 			// 			title: 'Leave Applications',
// 			// 			translate: 'APPLICATIONS',
// 			// 			type: 'item',
// 			// 			url: '/sms/applications'
// 			// 		},
// 			// 		{
// 			// 			id: 'expenses',
// 			// 			title: 'Expenses',
// 			// 			translate: 'EXPENSES',
// 			// 			type: 'item',
// 			// 			url: '/sms/expenses'
// 			// 		}
// 			// 	]
// 			// },
// 			// {
// 			// 	id: 'elearning',
// 			// 	title: 'E-Learning',
// 			// 	translate: 'ELEARNING',
// 			// 	type: 'collapse',
// 			// 	icon: 'import_contacts',
// 			// 	children: [
// 			// 		{
// 			// 			id: 'courses',
// 			// 			title: 'Courses',
// 			// 			translate: 'COURSES',
// 			// 			type: 'item',
// 			// 			url: '/elearning/courses'
// 			// 		},
// 			// 		{
// 			// 			id: 'lessons',
// 			// 			title: 'Lessons',
// 			// 			translate: 'LESSONS',
// 			// 			type: 'item',
// 			// 			url: '/elearning/lessons'
// 			// 		},
// 			// 		{
// 			// 			id: 'tests',
// 			// 			title: 'Tests',
// 			// 			translate: 'TESTS',
// 			// 			type: 'item',
// 			// 			url: '/elearning/tests'
// 			// 		},
// 			// 		{
// 			// 			id: 'questions',
// 			// 			title: 'Questions',
// 			// 			translate: 'QUESTIONS',
// 			// 			type: 'item',
// 			// 			url: '/elearning/questions'
// 			// 		}
// 			// 	]
// 			// },
// 			// {
// 			// 	id: 'academic',
// 			// 	title: 'Academic',
// 			// 	translate: 'ACADEMIC',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'school',
// 			// 	url: '/sms/academic'
// 			// },
// 			// {
// 			// 	id: 'attendance',
// 			// 	title: 'Attendance',
// 			// 	translate: 'ATTENDANCE',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'collapse',
// 			// 	icon: 'today',
// 			// 	children: [
// 			// 		{
// 			// 			id: 'studentattendance',
// 			// 			title: 'Student Attendance',
// 			// 			translate: 'STUDENTATTENDANCE',
// 			// 			type: 'item',
// 			// 			url: '/sms/attendance/studentattendance'
// 			// 		},
// 			// 		{
// 			// 			id: 'staffattendance',
// 			// 			title: 'Staff Attendance',
// 			// 			translate: 'STAFFATTENDANCE',
// 			// 			type: 'item',
// 			// 			url: '/sms/attendance/staffattendance'
// 			// 		}
// 			// 	]
// 			// },
// 			// {
// 			// 	id: 'library',
// 			// 	title: 'Library',
// 			// 	translate: 'LIBRARY',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'library_books',
// 			// 	url: '/sms/library'
// 			// },
// 			// {
// 			// 	id: 'transport',
// 			// 	title: 'Transport',
// 			// 	translate: 'TRANSPORT',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'airport_shuttle',
// 			// 	url: '/sms/transport'
// 			// },
// 			// {
// 			// 	id: 'hostel',
// 			// 	title: 'Hostel',
// 			// 	translate: 'HOSTEL',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'hotel',
// 			// 	url: '/sms/hostel'
// 			// },
// 			// {
// 			// 	id: 'examinations',
// 			// 	title: 'Examinations',
// 			// 	translate: 'EXAMINATIONS',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'view_list',
// 			// 	url: '/sms/examinations'
// 			// },
// 			// {
// 			// 	id: 'marks',
// 			// 	title: 'Marks',
// 			// 	translate: 'MARKS',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'view_module',
// 			// 	url: '/sms/marks'
// 			// },
// 			// {
// 			// 	id: 'todo',
// 			// 	title: 'To-Do',
// 			// 	type: 'item',
// 			// 	icon: 'check_box',
// 			// 	url: '/sms/todo',
// 			// 	badge: {
// 			// 		title: 3,
// 			// 		bg: 'rgb(255, 111, 0)',
// 			// 		fg: '#FFFFFF'
// 			// 	}
// 			// },
// 			// {
// 			// 	id: 'notes',
// 			// 	title: 'Notes',
// 			// 	translate: 'NOTES',
// 			// 	auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'note',
// 			// 	url: '/sms/notes'
// 			// },
// 			{
// 				id: 'events',
// 				title: 'Events',
// 				translate: 'EVENTS',
// 				auth: authRoles.admin,
// 				type: 'item',
// 				icon: 'insert_invitation',
// 				url: '/sms/events'
// 			},
// 			// {
// 			// 	id: 'reports',
// 			// 	title: 'Reports',
// 			// 	translate: 'REPORTS',
// 			// 	// auth: authRoles.admin,
// 			// 	type: 'item',
// 			// 	icon: 'assessment',
// 			// 	url: '/sms/reports'
// 			// },
// 		]
// 	},
// 	{
// 		id: 'people',
// 		title: 'People',
// 		translate: 'PEOPLE',
// 		auth: authRoles.admin,
// 		type: 'group',
// 		icon: 'apps',
// 		children: [
// 			{
// 				id: 'students',
// 				title: 'Students',
// 				translate: 'STUDENTS',
// 				type: 'item',
// 				icon: 'perm_contact_calendar',
// 				url: '/sms/people/students'
// 			},
// 			{
// 				id: 'parents',
// 				title: 'Parents',
// 				translate: 'PARENTS',
// 				type: 'item',
// 				icon: 'wc',
// 				url: '/sms/people/parents'
// 			},
// 			{
// 				id: 'teachers',
// 				title: 'Teachers',
// 				translate: 'TEACHERS',
// 				type: 'item',
// 				icon: 'account_box',
// 				url: '/sms/people/teachers'
// 			},
// 			// {
// 			// 	id: 'hrm',
// 			// 	title: 'Human Resources',
// 			// 	translate: 'HRM',
// 			// 	type: 'item',
// 			// 	icon: 'thumbs_up_down',
// 			// 	url: '/sms/people/hrm'
// 			// }
// 		]
// 	},
// 	// {
// 	// 	id: 'communication',
// 	// 	title: 'Communication',
// 	// 	translate: 'COMMUNNICATION',
// 	// 	type: 'group',
// 	// 	icon: 'apps',
// 	// 	children: [
// 	// 		{
// 	// 			id: 'chat',
// 	// 			title: 'Chat',
// 	// 			translate: 'CHAT',
// 	// 			type: 'item',
// 	// 			icon: 'chat',
// 	// 			url: '/sms/chat',
// 	// 			// badge: {
// 	// 			// 	title: 13,
// 	// 			// 	bg: 'rgb(9, 210, 97)',
// 	// 			// 	fg: '#FFFFFF'
// 	// 			// }
// 	// 		},
// 	// 		{
// 	// 			id: 'mail',
// 	// 			title: 'Emails',
// 	// 			translate: 'EMAILS',
// 	// 			type: 'item',
// 	// 			icon: 'email',
// 	// 			url: '/sms/mail',
// 	// 			// badge: {
// 	// 			// 	title: 25,
// 	// 			// 	bg: '#F44336',
// 	// 			// 	fg: '#FFFFFF'
// 	// 			// }
// 	// 		}
// 	// 	]
// 	// },
// 	// {
// 	// 	id: 'payslips',
// 	// 	title: 'Payslips',
// 	// 	translate: 'PAYSLIPS',
// 	// 	type: 'item',
// 	// 	icon: 'credit_card',
// 	// 	url: '/sms/payslips'
// 	// },
// 	// {
// 	// 	id: 'finances',
// 	// 	title: 'Finances',
// 	// 	translate: 'FINANCES',
// 	// 	auth: authRoles.admin,
// 	// 	type: 'group',
// 	// 	icon: 'apps',
// 	// 	children: [
// 	// 		{
// 	// 			id: 'accounts',
// 	// 			title: 'Banks / Cash Account',
// 	// 			translate: 'ACCOUNT',
// 	// 			type: 'item',
// 	// 			icon: 'account_balance',
// 	// 			url: '/sms/accounts'
// 	// 		},
// 	// 		{
// 	// 			id: 'transaction',
// 	// 			title: 'Transaction',
// 	// 			translate: 'TRANSACTION',
// 	// 			type: 'item',
// 	// 			icon: 'account_balance_wallet',
// 	// 			url: '/sms/transaction'
// 	// 		},
// 	// 		{
// 	// 			id: 'studentfees',
// 	// 			title: 'Student Fees',
// 	// 			translate: 'FEES',
// 	// 			type: 'item',
// 	// 			icon: 'attach_money',
// 	// 			url: '/sms/studentfees'
// 	// 		},
// 	// 		{
// 	// 			id: 'payroll',
// 	// 			title: 'Payroll',
// 	// 			translate: 'PAYROLL',
// 	// 			type: 'item',
// 	// 			icon: 'credit_card',
// 	// 			url: '/sms/payroll'
// 	// 		}
// 	// 	]
// 	// },
// 	// {
// 	// 	type: 'divider',
// 	// 	id: 'divider-1',
// 	// 	// auth: authRoles.admin
// 	// },
// 	// {
// 	// 	id: 'settings',
// 	// 	title: 'Settings',
// 	// 	translate: 'SETTINGS',
// 	// 	auth: authRoles.admin,
// 	// 	type: 'group',
// 	// 	icon: 'apps',
// 	// 	children: [
// 	// 		{
// 	// 			id: 'users',
// 	// 			title: 'User Management',
// 	// 			translate: 'USERS',
// 	// 			type: 'item',
// 	// 			icon: 'group',
// 	// 			url: '/sms/users'
// 	// 		},
// 	// {
// 	// 	id: 'admin',
// 	// 	title: 'Administration',
// 	// 	translate: 'ADMINISTRATION',
// 	// 	type: 'item',
// 	// 	icon: 'queue_play_next',
// 	// 	url: '/sms/admin'
// 	// }
// 	// 	]
// 	// }

// 	{
// 		id: 'fair',
// 		title: 'Fairs',
// 		type: 'collapse',
// 		// translate: 'FAIRS',
// 		icon: 'home',
// 		//'url': '/apps/e-commerce',
// 		children: [
// 			{
// 				id: 'fairs-child',
// 				title: 'Fairs',
// 				type: 'item',
// 				url: '/university/invitations',
// 			},
// 			{
// 				id: 'past-confirmed',
// 				title: 'Past Confirmed',
// 				type: 'item',
// 				url: '/university/past_university',
// 			},
// 			{
// 				id: 'future-confirmed',
// 				title: 'Future Confirmed',
// 				type: 'item',
// 				url: '/university/future_university',
// 			},

// 		]

// 	},
// 	{
// 		id: 'schools',
// 		title: 'Schools',
// 		// translate: 'SCHOOLS',
// 		type: 'item',
// 		icon: 'school',
// 		url: '/university/schools'
// 	},
// 	{
// 		id: 'users',
// 		title: 'Users',
// 		// translate: 'SCHOOLS',
// 		type: 'item',
// 		icon: 'person',
// 		url: '/university/users'
// 	}
// ];

// Uni Management
const navigationConfig = [
	{

		id: 'uni_management',
		title: 'Uni_Management',
		translate: 'UNI-MANAGEMENT',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'fair_uni',
				title: 'Fairs',
				type: 'collapse',
				// translate: 'FAIRS',
				icon: 'home',
				//'url': '/apps/e-commerce',
				children: [
					{
						id: 'fairs-child',
						title: 'Fairs',
						type: 'item',
						url: '/university/fairs/fairs',
					},
					{
						id: 'past-confirmed',
						title: 'Past Confirmed',
						type: 'item',
						url: '/university/fairs/past-confirmed',
					},
					{
						id: 'future-confirmed',
						title: 'Future Confirmed',
						type: 'item',
						url: '/university/fairs/future-confirmed',
					},

				]

			},

			{
				id: 'schools',
				title: 'Schools',
				// translate: 'SCHOOLS',
				type: 'item',
				icon: 'school',
				url: '/university/schools'
			},
			{
				id: 'users',
				title: 'Users',
				// translate: 'SCHOOLS',
				type: 'item',
				icon: 'person',
				url: '/university/users'
			}
		],


	},
	{

		id: 'school_management',
		title: 'School_Management',
		translate: 'SCHOOL-MANAGEMENT',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'fair_sch',
				title: 'Fairs',
				type: 'collapse',
				// translate: 'FAIRS',
				icon: 'assignment',
				children: [
					{
						id: 'fairs-list',
						title: 'Fairs List',
						type: 'item',
						url: '/schools/fairs/fairs_list',
					},
					{
						id: 'new-fair',
						title: 'New Fair',
						type: 'item',
						url: '/schools/fairs/create_fair',
					},


				]

			},
			{
				id: 'universities_sch',
				title: 'Univerisities',
				type: 'collapse',
				// translate: 'FAIRS',
				icon: 'assignment',
				children: [
					{
						id: 'universities_sch',
						title: 'Universities',
						// translate: 'SCHOOLS',
						type: 'item',
						url: '/schools/univerisites/univerisities_list'
					},
					{
						id: 'confirmed_universities_sch',
						title: 'Confirmed Univerisites',
						// translate: 'SCHOOLS',
						type: 'item',
						url: '/schools/univerisites/confirmed_universities'
					}
				]
			},

			{
				id: 'counselor_sch',
				title: 'Counselor',
				type: 'item',
				// translate: 'FAIRS',
				icon: 'assignment',
				'url': '/schools/counselor_list',

			},
			{
				id: 'students_reg_sch',
				title: 'Students Registration',
				type: 'item',
				// translate: 'FAIRS',
				icon: 'person_add',
				'url': '/schools/students_registration',

			},
			{
				id: 'workshop_list_sch',
				title: 'WorkShops List',
				type: 'item',
				// translate: 'FAIRS',
				icon: 'timer',
				'url': '/schools/workshop_list',

			},

			{
				id: 'manage_career_talks',
				title: 'Manage Career Talks',
				type: 'collapse',
				// translate: 'FAIRS',
				icon: 'person_pin',
				children: [
					{
						id: 'view_career_talks',
						title: 'View Career Talks',
						// translate: 'SCHOOLS',
						type: 'item',
						url: '/schools/career_talks/view'
					},
					{
						id: 'add_career_talks',
						title: 'Add Career Talks',
						// translate: 'SCHOOLS',
						type: 'item',
						url: '/schools/career_talks/add'
					},
					{
						id: 'career_confirmed_sessions',
						title: 'Confirmed Sessions',
						// translate: 'SCHOOLS',
						type: 'item',
						url: '/schools/career_talks/confirmed_sessions'
					}
				]
			},

		]
	}


];
export default navigationConfig;
