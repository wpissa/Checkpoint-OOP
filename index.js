class Produits {
    constructor(id, nom,prix){
        this.id = id
        this.nom = nom
        this.prix = prix
    }
    
}

class ProduitsPanier {
    constructor(produit, quantite){
        this.produit = produit
        this.quantite = quantite
    }
    prixTotal(){
        return this.produit.prix * this.quantite
    }
}
class Panier {
    constructor(){
        this.produits = []
        this.prixTotal = 0
    }
    TotalProduits(){
        return this.produits.length
    }
    addItem( prod, qte){
        const produit = new ProduitsPanier(prod,qte)
        this.produits.push(produit)
        this.prixTotal += prod.prix*qte
    }
    removeItem(id){
        this.produits = this.produits.filter(el => el.produit.id !== id)
    }
    display(){
        this.produits.forEach(el =>{
            console.log(`nom: ${el.produit.nom} quantité: ${el.quantite} prix total: ${el.prixTotal()}`)
        })
    }
}

const produit1 = new Produits(1,'Iphone', 7000)
const produit2 = new Produits(2,'Nokia', 9000)
const panier = new Panier()
panier.addItem(produit1, 3)
panier.addItem(produit2, 5)
panier.display()
panier.removeItem(2)
panier.display()