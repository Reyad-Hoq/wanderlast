"use client";
import { Delete } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import React from 'react';
import { toast } from 'react-toastify';

const DeleteAlert = ({ destination }) => {
  const { _id, destinationName } = destination;
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8000/destinations/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        toast.success('Destination deleted!');
        window.location.href = '/destinations';
      }

    } catch (error) {
      console.error('Error deleting destination:', error);
      toast.error('Error deleting destination. Please try again.');
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger"><Delete /> Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete your destination?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{destinationName} information</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  <Delete /> Delete Destination
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlert;