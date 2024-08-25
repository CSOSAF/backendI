async function removeFromCart(productId, cartId) {
    try {
        const response = await fetch(`/api/cart/${cartId}/products/${productId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            location.reload();
        } else {
            console.error(`No se pudo eliminar producto con id: ${productId}`);
        }
    } catch (error) {
        console.error('Error al eliminar producto:', error);
    }
}

async function checkout(cartId) {
    try {
        const response = await fetch(`/api/cart/${cartId}/purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();

        if (response.ok) {
            swal.fire({
                title: 'Tu compra ha sido exitosa',
                text: '¡Muchas gracias por elegirnos!',
                icon: 'success'
            }).then(() => {
                window.location.href = '/home';
            });
        } else {
            if (responseData.message === 'Compra incompleta') {
                await new Promise(resolve => {
                    swal.fire({
                        title: 'Lo sentimos, faltaron algunos productos en su compra',
                        text: 'No contamos con stock suficiente de los productos en el carrito',
                        icon: 'error',
                        didClose: () => {
                            resolve();
                        }
                    });
                });
                location.reload();
            } else {
                console.error(`No se pudo finalizar la compra`);
            }
        }
    } catch (error) {
        console.error('Error al finalizar compra:', error);
    }
}

async function emptyCart(cartId) {
    try {
        const response = await fetch(`/api/cart/${cartId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            location.reload();
        } else {
            console.error(`No se pudo vaciar carrito con id: ${cartId}`);
        }
    } catch (error) {
        console.error('Error al vaciar carrito:', error);
    }
}



