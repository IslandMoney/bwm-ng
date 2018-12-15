import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {

	private rentals: Rental[] = [{
		id: "1",
		title: "Central Apartment",
		city: "New York",
		street: "Times Square",
		category: "apartment",
		image: "http://via.placeholder.com/350x250",
		bedrooms: 3,
		description: "Nice Apartment",
		dailyRate: 120,
		shared: false,
		createdAt: "8/12/2018"
	},
	{
		id: "2",
		title: "Suburbs Apartment",
		city: "California",
		street: "Bel-Air",
		category: "villa",
		image: "http://via.placeholder.com/350x250",
		bedrooms: 6,
		description: "Nice Villa",
		dailyRate: 420,
		shared: false,
		createdAt: "8/12/2018"
	},
	{
		id: "3",
		title: "Loft",
		city: "New York",
		street: "5th Street",
		category: "loft",
		image: "http://via.placeholder.com/350x250",
		bedrooms: 1,
		description: "Nice Loft",
		dailyRate: 85,
		shared: false,
		createdAt: "8/12/2018"
	},
	{
		id: "4",
		title: "Suburbs Apartment",
		city: "New York",
		street: "Idk Street",
		category: "apartment",
		image: "http://via.placeholder.com/350x250",
		bedrooms: 3,
		description: "Nice Apartment",
		dailyRate: 58,
		shared: true,
		createdAt: "8/12/2018"
	}];

	public getRentalById(rentalId: string): Observable<Rental> {
		return new Observable<Rental>((observer) => {
				setTimeout(() => {
					const foundRental = this.rentals.find((rental) => {
						return rental.id == rentalId;
					});
					observer.next(foundRental);
				}, 500);
		})
	}
	
	public getRentals(): Observable<Rental[]> {
		return new Observable<Rental[]>((observer) => {

			setTimeout(()=>{
				observer.next(this.rentals);
			}, 1000);

		});
	}



}