import Person from "../models/Person.js";

export const getAllPersons = async (req, res) => {
  const persons = await Person.find();
  res.status(200).json({ persons });
};
export const createPerson = async (req, res) => {
  const person = await Person.create(req.body);
  res
    .status(201)
    .json({ message: "Person created successfully", person: person });
};

export const getPerson = async (req, res) => {
  const { user_id } = req.params;
  const person = await Person.findById(user_id);
  res.status(200).json({ person });
};

export const updatePerson = async (req, res) => {
  const { user_id } = req.params;

  const updatedPerson = await Person.findByIdAndUpdate(user_id, req.body, {
    new: true,
  });
  res.status(200).json({ message: "person modified", person: updatedPerson });
};

export const deletePerson = async (req, res) => {
  const { user_id } = req.params;

  const removedPerson = await Person.findByIdAndDelete(user_id);

  res.status(200).json({ message: "person deleted", person: removedPerson });
};
