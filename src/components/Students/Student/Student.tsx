import type StudentInterface from '@/types/StudentInterface';
import { BreadcrumbItem } from '@/components/layout/BreadcrumbsItem/BreadcrumbsItem';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs/Breadcrumbs';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
}

export const Student = ({ student }: Props): React.ReactElement => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная</BreadcrumbItem>
        <BreadcrumbItem href="/students">Студенты</BreadcrumbItem>
        <BreadcrumbItem isCurrent={true}>
          {student.lastName} {student.firstName}
        </BreadcrumbItem>
      </Breadcrumbs>

      <div>
        <h1 className={ styles.Student }>{student.lastName} {student.firstName} {student.middleName}</h1>
        <p className={ styles.StudentSpec }><span>ID:</span><span>{student.id}</span></p>
        {student.contacts && <p className={ styles.StudentSpec }><span>Контакты:</span><span>{student.contacts}</span></p>}
        {student.uuid && <p className={ styles.StudentSpec }><span>UUID:</span><span>{student.uuid}</span></p>}
        <p className={ styles.StudentSpec }><span>Группа:</span><span>{student.group?.name}</span></p>
        {student.contacts && <p className={ styles.StudentSpec }><span>Контактные данные:</span><span>{student.contacts}</span></p>}
      </div>
    </div>
  );
};