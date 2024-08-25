async function deleteUser(email) {
    try {
        const response = await fetch(`/api/users/${email}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const userElement = document.querySelector(`[data-email="${email}"]`);
            if (userElement) {
                userElement.remove();
            } else {
                console.error(`No se encontró el usuario con email ${email}`);
            }
        } else {
            console.error(`No se pudo eliminar el usuario con email: ${email}`);
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}

