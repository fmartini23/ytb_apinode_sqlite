const Client = require('../models/Client');

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.getAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

const getClientById = async (req, res) => {
  const clientId = req.params.id;

  try {
    const client = await Client.getById(clientId);
    if (!client) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
};

const createClient = async (req, res) => {
  const { name, email, phone } = req.body;
console.log(req.body);
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Nome, email e telefone são obrigatórios!' });
  }

  try {
    const [clientId] = await Client.create(name, email, phone);
    const newClient = { id: clientId, name, email, phone };
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

const updateClient = async (req, res) => {
  const clientId = req.params.id;
  const { name, email, phone } = req.body;

  try {
    await Client.update(clientId, name, email, phone);
    const updatedClient = { id: clientId, name, email, phone };
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

const deleteClient = async (req, res) => {
  const clientId = req.params.id;

  try {
    await Client.delete(clientId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};