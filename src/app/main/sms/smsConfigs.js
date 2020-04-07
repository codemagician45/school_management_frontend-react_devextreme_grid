import DashboardConfig from './dashboard/DashboardConfig';
import EventsConfig from './events/EventsConfig';
import FrontOfficeConfig from './frontoffice/FrontOfficeConfig';
import StudentsConfig from './people/students/StudentsConfig';
import TeachersConfig from './people/teachers/TeachersConfig';
import ParentsConfig from './people/parents/ParentsConfig';

const smsConfigs = [
	DashboardConfig,
	EventsConfig,
	FrontOfficeConfig,
	StudentsConfig,
	TeachersConfig,
	ParentsConfig
];

export default smsConfigs;
