'use client';

import { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle2, XCircle, Filter } from 'lucide-react';
import { toast } from 'sonner';

interface BookingData {
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  pincode: string;
  message: string;
  urgency: string;
}

interface Booking {
  id: string;
  formName: string;
  data: BookingData;
  email: string;
  phone: string;
  status: string | null;
  tags: string | null;
  createdAt: string;
  updatedAt: string;
}

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('');
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 50,
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, urgencyFilter, pagination.page]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (statusFilter) params.append('status', statusFilter);
      if (urgencyFilter) params.append('urgency', urgencyFilter);
      params.append('page', pagination.page.toString());
      params.append('limit', pagination.limit.toString());

      const response = await fetch(`/api/bookings?${params}`);
      if (!response.ok) throw new Error('Failed to fetch bookings');

      const data = await response.json();
      setBookings(data.bookings);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/forms/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update status');

      toast.success('Status updated successfully');
      fetchBookings();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'urgent':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'normal':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'scheduled':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Bookings</h1>
        <p className="text-gray-600">Manage customer booking requests and appointments</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
            <select
              value={urgencyFilter}
              onChange={(e) => setUrgencyFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">All Urgencies</option>
              <option value="emergency">Emergency</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setStatusFilter('');
                setUrgencyFilter('');
              }}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{pagination.total}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {bookings.filter((b) => !b.status || b.status === 'pending').length}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-green-600">
                {bookings.filter((b) => b.status === 'confirmed').length}
              </p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Emergency</p>
              <p className="text-2xl font-bold text-red-600">
                {bookings.filter((b) => b.tags?.includes('emergency')).length}
              </p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Bookings List */}
      {loading ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-gray-500 mt-4">Loading bookings...</p>
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No bookings found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {booking.data.customerName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Booking ID: {booking.id.slice(0, 8)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(
                          booking.data.urgency
                        )}`}
                      >
                        {booking.data.urgency.toUpperCase()}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {(booking.status || 'pending').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Service Type</p>
                      <p className="text-sm text-gray-900">{booking.data.serviceType}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Preferred Date & Time
                      </p>
                      <p className="text-sm text-gray-900">
                        {new Date(booking.data.preferredDate).toLocaleDateString('en-IN')} at{' '}
                        {booking.data.preferredTime}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a
                        href={`tel:${booking.phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {booking.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a
                        href={`mailto:${booking.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {booking.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Service Location
                    </p>
                    <p className="text-sm text-gray-900">
                      {booking.data.address}, Pincode: {booking.data.pincode}
                    </p>
                  </div>

                  {/* Message */}
                  {booking.data.message && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Customer Message</p>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        {booking.data.message}
                      </p>
                    </div>
                  )}

                  {/* Timestamps */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Submitted: {formatDate(booking.createdAt)}
                    </span>
                    {booking.updatedAt !== booking.createdAt && (
                      <span>Updated: {formatDate(booking.updatedAt)}</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <button
                    onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                    disabled={booking.status === 'confirmed'}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.id, 'completed')}
                    disabled={booking.status === 'completed'}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                    disabled={booking.status === 'cancelled'}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
            disabled={pagination.page === 1}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
            disabled={pagination.page === pagination.totalPages}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
