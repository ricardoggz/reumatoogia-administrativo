import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

export const Students = () => {
  const [students, setStudents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          "https://simposio-internacional-de-reumatologia-pediatrica.him.edu.mx/server/alumnos.php"
        );
        const json = await response.json();
        if (response.status === 200) {
          setStudents(json);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <section>
      {!students ? null : (
        <CSVLink
          className="btn btn-success"
          data={students}
          filename="inscripcion-alumnos"
        >
          Convertir datos a excel
        </CSVLink>
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Edad</th>
            <th scope="col">Grado académico</th>
            <th scope="col">Lugar de procedencia</th>
            <th scope="col">¿Pertenece a institución pública?</th>
            <th scope="col">Institución pública</th>
            <th scope="col">Número de certificación</th>
            <th scope="col">¿Es dermatólogo pediátra?</th>
            <th scope="col">Especialidad</th>
            <th scope="col">¿Es paciente?</th>
            <th scope="col">Modalidad en la que tomará el curso</th>
            <th scope="col">Fecha de registro</th>
          </tr>
        </thead>
        <tbody>
          {!students
            ? null
            : students.map((student) => (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.nombre}</td>
                  <td>{student.correo}</td>
                  <td>
                    {!student.telefono ? "Sin teléfono" : student.telefono}
                  </td>
                  <td>{!student.edad ? "Sin especificar" : student.edad}</td>
                  <td>
                    {!student.grado_academico
                      ? "Sin especificar"
                      : student.grado_academico}
                  </td>
                  <td>{student.lugar_procedencia}</td>
                  <td>
                    {!student.pertenece_institucion_publica
                      ? "Sin especificar"
                      : student.pertenece_institucion_publica}
                  </td>
                  <td>
                    {!student.institucion_publica
                      ? "Sin especificar"
                      : student.institucion_publica}
                  </td>
                  <td>
                    {!student.numero_certificacion
                      ? "Sin especificar"
                      : student.numero_certificacion}
                  </td>
                  <td>
                    {!student.es_dermatologo
                      ? "Sin especificar"
                      : student.es_dermatologo}
                  </td>
                  <td>
                    {!student.especialidad
                      ? "Sin especificar"
                      : student.especialidad}
                  </td>
                  <td>
                    {!student.es_paciente
                      ? "Sin especificar"
                      : student.es_paciente}
                  </td>
                  <td>
                    {!student.modalidad ? "Sin especificar" : student.modalidad}
                  </td>
                  <td>
                    {!student.fecha_registro
                      ? "Sin especificar"
                      : student.fecha_registro}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </section>
  );
};
