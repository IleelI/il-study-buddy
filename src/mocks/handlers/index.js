import { rest } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups,
      })
    );
  }),
  rest.get('/students/:group', (req, res, context) => {
    if (req.params.group) {
      const matchingStudents = students.filter(({ group }) => group === req.params.group.toUpperCase());
      return res(
        context.status(200),
        context.json({
          students: matchingStudents,
        })
      );
    } else {
      return res(
        context.status(200),
        context.json({
          students,
        })
      );
    }
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhrase
      ? students.filter((student) => student.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase()))
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
];
